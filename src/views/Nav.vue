<template>
  <div>
    <router-link to="/home">实物展示</router-link>
    <dl>
      <dt>环保</dt>
      <dd><router-link to="/page/envpage1">水质分析仪二维码内容</router-link></dd>
    </dl>
    <dl>
      <dt>机电测控</dt>
      <dd><router-link to="/page/elepage1">摆度传感器二维码系统格式</router-link></dd>
      <dd><router-link to="/page/elepage2">超声波流量计二维码系统格式</router-link></dd>
      <dd><router-link to="/page/elepage3">超声波水位计二维码系统格式</router-link></dd>
      <dd><router-link to="/page/elepage4">多普勒超声波测流仪二维码系统格式</router-link></dd>
      <dd><router-link to="/page/elepage5">光纤测温传感器二维码系统格式</router-link></dd>
      <dd><router-link to="/page/elepage6">振动传感器二维码系统格式</router-link></dd>
      <dd><router-link to="/page/elepage7">状态监测装置二维码系统格式</router-link></dd>
    </dl>
    <dl>
      <dt>监测</dt>
      <dd><router-link to="/page/monpage1">展示仪器_监测</router-link></dd>
    </dl>
    <dl>
      <dt>水电控制</dt>
      <dd><router-link to="/page/hydpage1">产品二维码系统格式-MB PLC+SJ12D+SJ22D+SJ40D+SJ30D-水电控制</router-link></dd>
    </dl>
    <dl>
      <dt>水利</dt>
      <dd><router-link to="/page/watpage1">产品二维码系统-水利</router-link></dd>
    </dl>
    <dl>
      <dt>水情</dt>
      <dd><router-link to="/page/sitpage1">产品二维码水情</router-link></dd>
    </dl>
    <dl>
      <dt>小水电</dt>
      <dd><router-link to="/page/swatpage1">低压机组智能控制器产品二维码系统格式-小水电</router-link></dd>
    </dl>
  </div>
</template>

<script>

export default {
  name: 'Nav',
  components: {
  }
}
</script>
