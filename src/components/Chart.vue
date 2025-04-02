<script setup>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import * as echarts from 'echarts'
import VChart, { THEME_KEY } from 'vue-echarts'
import { provide } from 'vue'
import {
    TitleComponent,
    TooltipComponent,
    ToolboxComponent,
    LegendComponent,
    GridComponent,
    DataZoomComponent
} from 'echarts/components'
import { BarChart, PieChart, LineChart } from 'echarts/charts'

provide(THEME_KEY, 'dark')
const props = defineProps({
    options : {type: Object}
})

use([
    CanvasRenderer,
    BarChart,
    PieChart,
    LineChart,
    TitleComponent,
    TooltipComponent,
    ToolboxComponent,
    LegendComponent,
    GridComponent,
    DataZoomComponent,
])
</script>

<template>
  <v-chart :option="props.options" autoresize></v-chart>
</template>

<style scoped>

</style>