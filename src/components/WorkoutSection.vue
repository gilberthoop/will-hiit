<template>
  <div id="container">
    <HighKnee
      v-if="!completedHK"
      :workout-duration="workoutDuration"
      :workout-timer="workoutTimer"
      :break-interval="breakInterval"
      @done="handleCompletedRoutine(completedHK = true)"
    />

    <MountainClimber
      :workout-duration="workoutDuration"
      v-else-if="completedHK && !completedMC"
      :workout-timer="workoutTimer"
      :break-interval="breakInterval"
      @done="handleCompletedRoutine(completedMC = true)"
    />

    <Burpee
      v-else-if="completedMC && !completeBurpee"
      :workout-duration="workoutDuration"
      :workout-timer="workoutTimer"
      :break-interval="breakInterval"
      @done="handleCompletedRoutine(completeBurpee = true)"
    />

    <HighSidePlankRaise
      v-else-if="completeBurpee && !completeHSPR"
      :workout-duration="workoutDuration"
      :workout-timer="workoutTimer"
      :break-interval="breakInterval"
      @done="handleCompletedRoutine(completeHSPR = true)"
    />

    <RussianTwist
      v-else-if="completeHSPR && !completeRT"
      :workout-duration="workoutDuration"
      :workout-timer="workoutTimer"
      :break-interval="breakInterval"
      @done="handleCompletedRoutine(completeRT = true)"
    />

    <SwitchingLunge
      v-else-if="completeRT && !completeSL"
      :workout-duration="workoutDuration"
      :workout-timer="workoutTimer"
      :break-interval="breakInterval"
      @done="handleCompletedRoutine(completeSL = true)"
    />

    <PushUpSideToSide
      v-else-if="completeSL && !completePSS"
      :workout-duration="workoutDuration"
      :workout-timer="workoutTimer"
      :break-interval="breakInterval"
      @done="handleCompletedRoutine(completePSS = true)"
    />

    <JumpingJack
      v-else-if="completePSS && !completeJJ"
      :workout-duration="workoutDuration"
      :workout-timer="workoutTimer"
      :break-interval="breakInterval"
      @done="handleCompletedRoutine(completeJJ = true)"
    />

    <InAndOut
      v-else-if="completeJJ && !completeIO"
      :workout-duration="workoutDuration"
      :workout-timer="workoutTimer"
      :break-interval="breakInterval"
      @done="handleCompletedRoutine(completeIO = true)"
    />

    <SideToSideJumpSquat
      v-else-if="completeIO && !completeSSJS"
      :workout-duration="workoutDuration"
      :workout-timer="workoutTimer"
      :break-interval="breakInterval"
      @done="handleCompletedRoutine(completeSSJS = true, completeAll = true)"
    />

    <div v-else>
      <h1>Done!</h1>
    </div>

    <div>
      <ion-button
        color="medium"
        @click="onTimerButtonClick"
      >
        {{ timerButtonText }}
      </ion-button>
    </div>
  </div>
</template>

<script>
import { IonButton } from '@ionic/vue'
import HighKnee from '@/components/hiit-workouts/HighKnee'
import MountainClimber from '@/components/hiit-workouts/MountainClimber'
import Burpee from '@/components/hiit-workouts/Burpee'
import HighSidePlankRaise from '@/components/hiit-workouts/HighSidePlankRaise'
import RussianTwist from '@/components/hiit-workouts/RussianTwist'
import SwitchingLunge from '@/components/hiit-workouts/SwitchingLunge'
import PushUpSideToSide from '@/components/hiit-workouts/PushUpSideToSide'
import JumpingJack from '@/components/hiit-workouts/JumpingJack'
import InAndOut from '@/components/hiit-workouts/InAndOut'
import SideToSideJumpSquat from '@/components/hiit-workouts/SideToSideJumpSquat'

export default {
  name: 'WorkoutSection',

  components: {
    IonButton,
    HighKnee,
    MountainClimber,
    Burpee,
    HighSidePlankRaise,
    RussianTwist,
    SwitchingLunge,
    PushUpSideToSide,
    JumpingJack,
    InAndOut,
    SideToSideJumpSquat
  },

  data () {
    return {
      timerId: null,
      workoutTimer: 0,
      endOfBreakTime: 0,
      workoutDuration: 15,
      breakInterval: 10,
      completedHK: false,
      completedMC: false,
      completeBurpee: false,
      completeHSPR: false,
      completeRT: false,
      completeSL: false,
      completePSS: false,
      completeJJ: false,
      completeIO: false,
      completeSSJS: false,
      completeAll: false,
      workoutIsRunning: false
    }
  },

  computed: {
    timerButtonText () {
      return this.workoutIsRunning ? 'Pause' : 'Start'
    }
  },

  methods: {
    // Handle the start time of a HIIT workout routine
    startWorkout () {
      if (this.workoutTimer < this.workoutDuration) {
        this.timerId = setTimeout(() => {
          this.workoutTimer++
          console.log(this.workoutTimer)
          this.startWorkout()
        }, 1000)
      } else {
        this.countDownBreak()
      }
    },
    
    // Handle the start time of the 15-second break interval
    countDownBreak () {
      if (this.breakInterval > this.endOfBreakTime) {
        this.timerId = setTimeout(() => {
          this.breakInterval--
          console.log(this.breakInterval)
          this.countDownBreak()
        }, 1000)
      }
    },
    
    // Handle timer reset
    resetTimers () {
      this.workoutTimer = 0
      this.breakInterval = 10
    },

    // Handle HIIT workout once completed
    handleCompletedRoutine () {
      this.resetTimers()
      if (!this.completeAll) this.startWorkout()
    },

    // Handle timer 'Start' and 'Pause' button toggle click
    onTimerButtonClick () {
      if (!this.workoutIsRunning) {
        this.startWorkout()
        this.workoutIsRunning = true
      } else {
        clearTimeout(this.timerId)
        this.workoutIsRunning = false
      }
    }
  }
}
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>