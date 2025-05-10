import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TutorialModal = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, 4));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <View style={styles.modalContainer}>
      {currentPage === 1 && (
        <View style={styles.page}>
          <View style={styles.noticeGif}>
            <Image source={require('@/assets/images/tutorial/healthy-food.gif')} style={[styles.image, styles.imageLeft]} />
            <Image source={require('@/assets/images/tutorial/camera.gif')} style={[styles.image, styles.imageRight, { transform: [{ scaleX: -1 }] }]} />
          </View>
          <View style={styles.notice}>
            <Text>Prenez en photo vos articles.</Text>
            <Text>Avoir un bon éclairage et un bon cadrage améliorera vos résultats.</Text>
          </View>
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text>→</Text>
          </TouchableOpacity>
        </View>
      )}

      {currentPage === 2 && (
        <View style={styles.page}>
          <View style={styles.noticeGif}>
            <Image source={require('@/assets/images/tutorial/settings.gif')} style={styles.imageLeft} />
            <Image source={require('@/assets/images/tutorial/check-up.gif')} style={styles.imageRight} />
          </View>
          <View style={styles.notice}>
            <Text>Vérifier les articles reconnus.</Text>
            <Text>Ajuster les quantités et les filtres que vous souhaitez.</Text>
          </View>
          <View style={styles.navigationButtons}>
            <TouchableOpacity style={styles.prevButton} onPress={handlePrev}>
              <Text>←</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
              <Text>→</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {currentPage === 3 && (
        <View style={styles.page}>
          <View style={styles.noticeGif}>
            <Image source={require('@/assets/images/tutorial/chef.gif')} style={styles.imageCenter} />
            <Image source={require('@/assets/images/tutorial/like.gif')} style={[styles.imageOverlay, styles.imageRight]} />
            <Image source={require('@/assets/images/tutorial/print.gif')} style={[styles.imageOverlay, styles.imageLeft]} />
          </View>
          <View style={styles.notice}>
            <Text>Choisissez la recette que vous voulez.</Text>
            <Text>A vous de jouer !!</Text>
            <Text>Si une recette vous plaît, vous pouvez la mettre en favoris ou l'imprimer.</Text>
          </View>
          <View style={styles.navigationButtons}>
            <TouchableOpacity style={styles.prevButton} onPress={handlePrev}>
              <Text>←</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
              <Text>→</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {currentPage === 4 && (
        <View style={styles.page}>
          <View style={styles.noticeGif}>
            <Image source={require('@/assets/images/tutorial/user.gif')} style={styles.imageCenter} />
          </View>
          <View style={styles.notice}>
            <Text>Vous retrouverez vos recettes favorites ainsi que d'autres paramètres sur votre page de profil.</Text>
          </View>
          <View style={styles.navigationButtons}>
            <TouchableOpacity style={styles.prevButton} onPress={handlePrev}>
              <Text>←</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton}>
              <Text>×</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  page: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  noticeGif: {
    minHeight: 200,
    position: 'relative',
  },
  image: {
    position: 'absolute',
  },
  imageLeft: {
    left: 0,
  },
  imageRight: {
    right: 0,
  },
  imageCenter: {
    alignSelf: 'center',
  },
  imageOverlay: {
    bottom: 10,
    height: '40%',
    width: '30%',
  },
  notice: {
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  prevButton: {
    marginRight: 20,
  },
  nextButton: {},
  closeButton: {},
});

export default TutorialModal;
