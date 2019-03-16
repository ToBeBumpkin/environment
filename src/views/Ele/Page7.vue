<template>
    <div>
        <p><strong>产品名称：</strong>状态监测装置</p>
        <p><strong>产品型号：</strong>SJ90A、SJ90B</p>
        <p><strong>产品介绍：</strong></p>
        <p>SJ-90A为嵌入式多通道模块化振动摆度监测装置，采用Linux嵌入式操作系统，采用PC104嵌入式硬件结构设计，可以对机组振动、摆度和水压脉动进行在线监测。</p>
        <p>SJ90B状态监测装置采用高性能嵌入式CPU 和Linux 嵌入式操作系统，以PLC 的工业标准设计制造，适应旋转机械的状态监测各种数据的采集。</p>
        <p><strong>产品性能参数：</strong></p>
        <p>SJ90A：</p>
        <ul>
            <li>测量范围： 0～2.00mm</li>
            <li>采用频率：	10kHz（可调）</li>
            <li>测量精度：	±0.01mm；±0.01MPa</li>
            <li>测点内容：	振动、摆度、水压脉动、键相</li>
            <li>测点容量： 24点</li>
            <li>显示方式：彩色液晶显示</li>
            <li>显示内容：幅值数字、柱状图，测点频谱分析图，时域波形图，三维瀑布图、趋势分析图、轴心轨迹图、历史趋势分析图、状态报表等。</li>
            <li>外部接口：RS-485串行接口和RJ45网络接口，支持远程设定。</li>
            <li>I/O点：4个开入点；3个开出点（可任意设点）；</li>
            <li>工作电源：	AC220V 50Hz DC220V</li>
        </ul>
        <p>SJ90B详见技术手册</p>
        <p><strong>产品图片：</strong></p>
        <img :src="img.elepage7_1" />
        <p style="text-align: center">SJ90A</p>
        <img :src="img.elepage7_2" />
        <img :src="img.elepage7_3" />
        <p style="text-align: center">SJ90B</p>
        <p><strong>产品应用范围：</strong></p>
        <p>SJ90A：，采用标准19英寸半宽插箱结构，硬件为模块化设计，包括CPU模件、电源模件、功能模件等，根据测点类型选择相应的功能模件，而且支持带电插拔，监测类型包括振动、摆度、水压脉动等信号，主要为水电机组/泵组状态监测及振摆保护提供实时的在线监测与异常告警保护输出。</p>
        <p>SJ90B：适应旋转机械的状态监测各种数据的采集，可自由扩展，监测类型包括转速（键相）、振动、摆度、水压脉动、温度、压力等信号，是水电机组、风电机组、泵组等实现状态监测数据采集的理想设备。</p>

        <p><strong>业绩：</strong></p>
        <div class="tab_wrap">
            <table style="width: 600px">
                <tr>
                    <th>序号</th>
                    <th>用户名称</th>
                    <th>装机容量（MW）</th>
                    <th>机组类型</th>
                    <th>监测内容</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>安徽绩溪抽水蓄能电站</td>
                    <td>6×300=1600</td>
                    <td>可逆式机组</td>
                    <td>振动、摆度、轴向窜动、压力脉动、气隙、局放、磁通量</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>丰满电站全面治理（重建）工程</td>
                    <td>6×200=1200</td>
                    <td>混流式机组</td>
                    <td>振动、摆度、轴向窜动</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>柬埔寨桑河二级水电站</td>
                    <td>8*50=400</td>
                    <td>灯泡贯流式机组</td>
                    <td>振动、摆度、压力脉动、轴向位移、气隙</td>
                </tr>
            </table>
        </div>

    </div>
</template>

<script>

    export default {
        name: "Page1"
    }
</script>

<style scoped>

</style>