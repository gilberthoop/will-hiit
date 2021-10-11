<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar>
        <ion-tab-button tab="dashboard" href="/tabs/dashboard">
          <ion-icon :icon="person" />
          <ion-label>Dashboard</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="workouts" href="/tabs/workouts">
          <ion-icon :icon="walk" />
          <ion-label>Workouts</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="settings" href="/tabs/settings">
          <ion-icon :icon="settings" />
          <ion-label>Settings</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { walk, settings, person } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      walk, 
      settings, 
      person,
    }
  }
}
</script>