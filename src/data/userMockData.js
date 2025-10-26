// Datos del usuario actual (logueado)
export const currentUser = {
  id: 1,
  name: "Alex Martínez",
  username: "alex_fitness",
  email: "alex@gymsocial.com",
  avatar: "https://i.pravatar.cc/150?img=5",
  coverImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=300&fit=crop",
  bio: "Apasionado del fitness 💪 | Entrenador personal certificado | Motivando a otros a alcanzar sus metas",
  location: "Madrid, España",
  website: "alexfitness.com",
  joinDate: "2023-05-15",
  
  // Estadísticas del perfil
  stats: {
    posts: 127,
    followers: 1245,
    following: 892,
    workouts: 89,
    streak: 15 // días consecutivos entrenando
  },
  
  // Información fitness
  fitnessInfo: {
    goals: ["Ganar masa muscular", "Mejorar resistencia"],
    favoriteExercises: ["Sentadillas", "Press de banca", "Peso muerto"],
    gymName: "FitZone Madrid Centro",
    experienceLevel: "Avanzado",
    workoutFrequency: "6 días/semana"
  },
  
  // Posts del usuario (sus propias publicaciones)
  userPosts: [
    {
      id: 101,
      content: "¡Nuevo PR en sentadillas! 140kg x 5 reps 🔥 El trabajo duro siempre da resultados",
      image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=400&h=300&fit=crop",
      likes: 89,
      comments: 23,
      timestamp: "2024-10-24T18:30:00Z"
    },
    {
      id: 102,
      content: "Rutina de piernas completada ✅ Hoy tocó sufrir pero valió la pena",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      likes: 67,
      comments: 12,
      timestamp: "2024-10-23T10:15:00Z"
    },
    {
      id: 103,
      content: "Desayuno post-entreno: avena con frutas y proteína 🥣 ¡La nutrición es clave!",
      image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=300&fit=crop",
      likes: 45,
      comments: 8,
      timestamp: "2024-10-22T08:45:00Z"
    },
    {
      id: 104,
      content: "15 días consecutivos entrenando 🎯 La constancia es lo más importante",
      image: null,
      likes: 123,
      comments: 34,
      timestamp: "2024-10-21T16:20:00Z"
    }
  ],
  
  // Configuraciones de privacidad
  privacy: {
    profilePublic: true,
    showEmail: false,
    showWorkouts: true,
    allowMessages: true
  }
};

// Datos adicionales para mostrar achievements/logros
export const userAchievements = [
  {
    id: 1,
    title: "Streak Master",
    description: "15 días consecutivos entrenando",
    icon: "🔥",
    unlockedDate: "2024-10-25"
  },
  {
    id: 2,
    title: "PR Crusher",
    description: "Nuevo récord personal en sentadillas",
    icon: "💪",
    unlockedDate: "2024-10-24"
  },
  {
    id: 3,
    title: "Social Butterfly",
    description: "100 posts publicados",
    icon: "🦋",
    unlockedDate: "2024-10-20"
  },
  {
    id: 4,
    title: "Inspirador",
    description: "1000+ seguidores",
    icon: "⭐",
    unlockedDate: "2024-10-15"
  }
];