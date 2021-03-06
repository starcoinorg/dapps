import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import Paper from "@mui/material/Paper";
import * as React from "react";

export default function Gas() {
    // const [data] = useState()
    // useMemo(async () => {
    //   //  const gasPrice = await getGasPrice()
    // }, [data])
    type EChartsOption = echarts.EChartsOption;
    const gaugeData = [
        {
            value: 20,
            name: 'Good',
            title: {
                offsetCenter: ['-40%', '80%']
            },
            detail: {
                offsetCenter: ['-40%', '95%']
            }
        },
        {
            value: 40,
            name: 'Better',
            title: {
                offsetCenter: ['0%', '80%']
            },
            detail: {
                offsetCenter: ['0%', '95%']
            }
        },
        {
            value: 60,
            name: 'Perfect',
            title: {
                offsetCenter: ['40%', '80%']
            },
            detail: {
                offsetCenter: ['40%', '95%']
            }
        }
    ];

    const option: EChartsOption = {
        series: [
            {
                type: 'gauge',
                anchor: {
                    show: true,
                    showAbove: true,
                    size: 18,
                    itemStyle: {
                        color: '#FAC858'
                    }
                },
                pointer: {
                    icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
                    width: 8,
                    length: '80%',
                    offsetCenter: [0, '8%']
                },

                progress: {
                    show: true,
                    overlap: true,
                    roundCap: true
                },
                axisLine: {
                    roundCap: true
                },
                data: gaugeData,
                title: {
                    fontSize: 14
                },
                detail: {
                    width: 40,
                    height: 14,
                    fontSize: 14,
                    color: '#fff',
                    backgroundColor: 'auto',
                    borderRadius: 3,
                    formatter: '{value}%'
                }
            }
        ]
    };
    return <>
        <Paper style={{height: '600px'}}>
            <ReactECharts option={option} style={{height: '100%'}}/>
        </Paper>

    </>
}