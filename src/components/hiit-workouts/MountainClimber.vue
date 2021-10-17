<template>
    <div class="container">
        <h1>Mountain Climbers</h1>
        <div
            v-if="workoutTimer !== workoutDuration"
        >
            <h3>Counter</h3>
            <h1>{{ workoutTimer }}</h1>
        </div>
        <div
            v-else
        >
            <h3>{{ breakTimeText }}</h3>
            <h1>{{ breakInterval }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MountainClimber',

    props: {
        workoutDuration: Number,
        workoutTimer: Number,
        breakInterval: Number
    },

    watch: {
        breakInterval (value) {
            if (value === 0) this.$emit('done')
        }
    },

    computed: {
        breakTimeText () {
            return this.breakInterval <= 5 ? 'Get Ready!' : 'Break time'
        }
    }
}
</script>
