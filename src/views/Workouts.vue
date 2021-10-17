<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Workouts</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Workouts</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <WorkoutSection name="Workouts page" />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import WorkoutSection from '@/components/WorkoutSection.vue';

export default  {
  name: 'Workouts',
  components: { WorkoutSection, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>