import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, FlatList } from 'react-native';

const Homepage = () => {
  const featuredJobs = [
    {
      id: '1',
      title: 'Software Engineer',
      company: 'Facebook',
      location: 'Accra, Ghana',
      salary: '$180,000',
      logo: require('../assets/Facebook.png'),
    },
    {
      id: '2',
      title: 'Product Manager',
      company: 'Google',
      location: 'New York, US',
      salary: '$160,000',
      logo: require('../assets/Google.png'),
    },
  ];

  const popularJobs = [
    {
      id: '1',
      title: 'Jr Executive',
      company: 'Burger King',
      location: 'Los Angeles, US',
      salary: '$96,000/y',
      logo: require('../assets/Group.png'),
    },
    {
      id: '2',
      title: 'Product Manager',
      company: 'Beats',
      location: 'Florida, US',
      salary: '$84,000/y',
      logo: require('../assets/image 8.png'),
    },
    {
      id: '3',
      title: 'Product Manager',
      company: 'Facebook',
      location: 'Florida, US',
      salary: '$86,000/y',
      logo: require('../assets/Facebook.png'),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Cole World</Text>
          <Text style={styles.userEmail}>cole@gmail.com</Text>
        </View>
        <Image source={ require('../assets/Ellipse.png') } style={styles.profilePic} />
      </View>
      <View style={styles.searchBarContainer}>
        <TextInput style={styles.searchBar} placeholder="Search a job or position" />
        <TouchableOpacity style={styles.filterButton}>
          <Image source={require('../assets/filter.5.png')} style={styles.filterIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={featuredJobs}
        renderItem={({ item }) => (
          <View style={styles.featuredJobCard}>
            <Image source={item.logo} style={styles.featuredJobLogo} />
            
            <Text style={styles.featuredJobTitle}>{item.title}</Text>
            <Text style={styles.featuredJobCompany}>{item.company}</Text>
            <Text style={styles.featuredJobSalary}>{item.salary}</Text>
            <Text style={styles.featuredJobLocation}>{item.location}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        style={styles.featuredJobsList}
      />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>

      </View>
      <FlatList
        data={popularJobs}
        renderItem={({ item }) => (
          <View style={styles.popularJobCard}>
            <Image source={item.logo} style={styles.popularJobLogo} />
            <View style={styles.popularJobInfo}>
              <Text style={styles.popularJobTitle}>{item.title}</Text>
              <Text style={styles.popularJobCompany}>{item.company}</Text>
              <Text style={styles.popularJobSalary}>{item.salary}</Text>
              <Text style={styles.popularJobLocation}>{item.location}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        style={styles.popularJobsList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  userInfo: {
    justifyContent: 'center',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0D0D26',
  },
  userEmail: {
    fontSize: 14,
    color: 'gray',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    paddingVertical: 10,
  },
  filterButton: {
    padding: 10,
  },
  filterIcon: {
    width: 20,
    height: 20,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  seeAll: {
    fontSize: 14,
    color: '#356899',
  },
  featuredJobsList: {
    marginBottom: 20,
  },
  featuredJobCard: {
    backgroundColor: '#356899',
    borderRadius: 8,
    padding: 20,
    marginRight: 15,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  featuredJobLogo: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  featuredJobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  featuredJobCompany: {
    fontSize: 14,
    color: '#E5E5E5',
    marginBottom: 5,
  },
  featuredJobSalary: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  featuredJobLocation: {
    fontSize: 14,
    color: '#E5E5E5',
  },
  popularJobsList: {
    marginBottom: 20,
  },
  popularJobCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  popularJobLogo: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  popularJobInfo: {
    flex: 1,
  },
  popularJobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0D0D26',
  },
  popularJobCompany: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 5,
  },
  popularJobSalary: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0D0D26',
  },
  popularJobLocation: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Homepage;
