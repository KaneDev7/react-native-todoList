
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function About () {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>ToDoList - Une Application Simple de Gestion des Tâches</Text>

      <Text style={styles.description}>
        L'application ToDoList est un outil pratique et efficace pour vous aider à organiser votre quotidien.
        Conçue avec React Native, cette application offre une interface conviviale et des fonctionnalités
        essentielles pour simplifier la gestion de vos tâches quotidiennes.
      </Text>

      <Text style={styles.subTitle}>Fonctionnalités clés :</Text>

      <Text style={styles.feature}>
        1. Ajouter des Tâches :
        Grâce à une interface intuitive, ajouter de nouvelles tâches à votre liste est un jeu d'enfant.
        Il vous suffit de saisir le libellé de la tâche dans le champ dédié, puis d'appuyer sur le bouton "Ajouter".
        Vos nouvelles tâches apparaissent instantanément dans la liste principale.
      </Text>

      <Text style={styles.feature}>
        2. Supprimer des Tâches :
        Pour maintenir votre liste propre et organisée, l'application offre la possibilité de supprimer
        rapidement les tâches accomplies ou celles qui ne sont plus nécessaires. Il vous suffit de glisser
        vers la gauche sur une tâche ou d'utiliser le bouton de suppression associé à chaque élément de la liste.
      </Text>

      <Text style={styles.feature}>
        3. Filtrer les Tâches par État :
        La fonction de filtrage vous permet de visualiser facilement les tâches accomplies, en cours ou
        celles qui nécessitent une attention particulière. Sélectionnez simplement l'option de filtrage désirée,
        et la liste se met à jour en temps réel pour afficher uniquement les tâches correspondantes.
      </Text>

      <Text style={styles.subTitle}>Simplicité et Efficacité :</Text>
      <Text style={styles.description}>
        L'interface épurée de ToDoList favorise une expérience utilisateur sans encombre. En combinant des fonctionnalités
        indispensables avec une navigation fluide, l'application vous permet de rester concentré sur vos tâches sans distractions inutiles.
      </Text>

      <Text style={styles.subTitle}>Persistance des Données :</Text>
      <Text style={styles.description}>
        Grâce à l'intégration d'AsyncStorage, vos tâches sont automatiquement sauvegardées localement sur votre appareil.
        Ainsi, même en cas de fermeture de l'application, vos listes restent accessibles et à jour lors de votre prochaine utilisation.
      </Text>

      <Text style={styles.callToAction}>
        Soyez maître de votre emploi du temps avec ToDoList. Téléchargez dès maintenant et transformez la gestion de vos
        tâches en une expérience simple et agréable !
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color : '#0f8bf8'
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 24,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color : '#0f8bf8'

  },
  feature: {
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 10,
    lineHeight: 22,
  },
  callToAction: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'blue',
    textAlign: 'center',
  },
});

