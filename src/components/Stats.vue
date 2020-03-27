<template>
    <div id='stats'>
        <el-row :gutter="20">
            <el-col :span="6" class='main-stat'>
                <div class='stat'>
                    <label>Confirmed Cases in Pakistan</label>
                    <div class='number'>
                        1,203
                        <span class='mark red'> <i class="el-icon-top"></i>4%</span>
                    </div>
                </div>
            </el-col>
            <el-col :span="18">
                <el-row :gutter="20">
                    <el-col :span="6">
                        <div class='stat'>
                            <label>In Last 24 hours</label>
                            <div class='number'>
                                334
                                <span class='mark red'> <i class="el-icon-top"></i>10%</span>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class='stat'>
                            <label>Active Cases</label>
                            <div class='number'>
                                1,149
                                <span class='mark red'> <i class="el-icon-top"></i>4%</span>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class='stat'>
                            <label>Total Recoveries</label>
                            <div class='number'>
                                110
                                <span class='mark green'> <i class="el-icon-top"></i>2.5%</span>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class='stat'>
                            <label>Total Deaths</label>
                            <div class='number'>
                                9
                                <span class='mark'>%0</span>
                            </div>
                        </div>
                    </el-col>

                </el-row>
                
            </el-col>
        </el-row>
    </div>
</template>

<style lang='scss' scoped>
#stats {
    padding: 1rem 1.5rem;
    
    .stat {
        display: inline-block;
        margin-right: 2rem;
        label {
            font-weight: bold;
            font-size: 0.8rem;
            margin-bottom: 0.5rem;
            display: block;
        }
        .number {
            font-weight: bold;
            font-size: 2rem;
            .mark {
                font-size: 1rem
            }
        }
        .green {
            color: #5cbb7a;
        }
        .red {
            color: #f56c6c;
        }
    }

    .main-stat {
        border-right: 1px solid #eee;
        display: inline-block;
        font-size: 1.2em;
        .stat {
            .number {
                font-size: 2.5rem;
            }
        }
    }
}
</style>