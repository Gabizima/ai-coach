import { View, Text, ScrollView, SafeAreaView } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#111827' }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          {/* Header */}
          <View style={{ padding: 16 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Max</Text>
                <Text style={{ color: '#34D399' }}>Niveau Intermédiaire</Text>
              </View>
              <View style={{ flexDirection: 'row', gap: 4 }}>
                <View style={{ width: 8, height: 8, backgroundColor: '#34D399', borderRadius: 4 }} />
                <View style={{ width: 8, height: 8, backgroundColor: '#34D399', borderRadius: 4 }} />
                <View style={{ width: 8, height: 8, backgroundColor: '#34D399', borderRadius: 4 }} />
              </View>
            </View>
          </View>

          {/* Objectifs */}
          <View style={{ padding: 16 }}>
            <View style={{ 
              backgroundColor: '#1F2937', 
              borderRadius: 24, 
              padding: 24,
              borderWidth: 1,
              borderColor: 'rgba(75, 85, 99, 0.3)'
            }}>
              <View style={{ 
                flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                marginBottom: 24
              }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                  Mes Objectifs
                </Text>
                <View style={{ 
                  backgroundColor: 'rgba(52, 211, 153, 0.2)', 
                  borderRadius: 20,
                  paddingVertical: 6,
                  paddingHorizontal: 16
                }}>
                  <Text style={{ color: '#34D399' }}>3 objectifs actifs</Text>
                </View>
              </View>
              
              {/* Liste des objectifs à ajouter */}
            </View>
          </View>

          {/* Programme du jour */}
          <View style={{ padding: 16 }}>
            <View style={{ 
              backgroundColor: '#1F2937',
              borderRadius: 24,
              padding: 24,
              borderWidth: 1,
              borderColor: 'rgba(75, 85, 99, 0.3)'
            }}>
              <View style={{ 
                backgroundColor: 'rgba(52, 211, 153, 0.2)',
                borderRadius: 20,
                paddingVertical: 4,
                paddingHorizontal: 12,
                alignSelf: 'flex-start',
                marginBottom: 8
              }}>
                <Text style={{ color: '#34D399' }}>Session du jour</Text>
              </View>
              <Text style={{ 
                fontSize: 24, 
                fontWeight: 'bold', 
                color: 'white',
                marginBottom: 4
              }}>
                Pull & Core
              </Text>
              <Text style={{ color: '#9CA3AF' }}>Adapté à votre progression</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}