import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import './config.js';
import { makeNWSRequest } from './api.js';
import { formatAlert, formatForecast } from './utils.js';
const server = new McpServer({
    name: 'weather',
    version: '1.0.0',
});
const API_BASE = process.env.API_URL;
server.tool('get-alerts', 'Get weather alerts for a location', {
    longitude: z.number().min(-180).max(180).describe("位置的经度"),
    latitude: z.number().min(-90).max(90).describe("位置的纬度"),
}, async ({ latitude, longitude }) => {
    const alertsUrl = `${API_BASE}/v7/warning/now?location=${longitude.toFixed(2)},${latitude.toFixed(2)}`;
    const alertsData = await makeNWSRequest(alertsUrl);
    if (!alertsData) {
        return {
            content: [
                {
                    type: 'text',
                    text: '无法获取警报数据',
                }
            ]
        };
    }
    const warning = alertsData.warning || [];
    if (warning.length === 0) {
        return {
            content: [
                {
                    type: 'text',
                    text: `没有警报数据`,
                }
            ]
        };
    }
    const formattedAlerts = warning.map(formatAlert);
    const alertsText = `警报:\n\n${formattedAlerts.join("\n")}`;
    return {
        content: [
            {
                type: 'text',
                text: alertsText,
            }
        ]
    };
});
server.tool('get-forecast', 'Get weather forecast for a location', {
    longitude: z.number().min(-180).max(180).describe("位置的经度"),
    latitude: z.number().min(-90).max(90).describe("位置的纬度"),
}, async ({ latitude, longitude }) => {
    const forecastUrl = `${API_BASE}/v7/grid-weather/7d?location=${longitude.toFixed(2)},${latitude.toFixed(2)}`;
    const forecastData = await makeNWSRequest(forecastUrl);
    if (!forecastData) {
        return {
            content: [
                {
                    type: "text",
                    text: "无法获取预测数据",
                },
            ],
        };
    }
    const daily = forecastData?.daily || [];
    if (daily.length === 0) {
        return {
            content: [
                {
                    type: "text",
                    text: "没有可用的预测数据",
                },
            ],
        };
    }
    const formattedForecast = daily.map(formatForecast);
    const forecastText = `${latitude}, ${longitude}的预测:\n\n${formattedForecast.join("\n")}`;
    return {
        content: [
            {
                type: "text",
                text: forecastText,
            },
        ],
    };
});
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("Weather MCP Server running on stdio");
}
main().catch((error) => {
    console.error("main()中的致命错误:", error);
    process.exit(1);
});
