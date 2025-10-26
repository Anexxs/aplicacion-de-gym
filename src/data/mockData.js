// Datos de ejemplo para nuestra red social del gimnasio
export const mockPosts = [
  {
    id: 1,
    author: {
      name: "María González",
      username: "maria_fitness",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    content: "¡Acabé mi rutina de piernas! 💪 Sentadillas: 3x12, peso muerto: 3x10",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    likes: 23,
    timestamp: "2024-10-25T10:30:00Z",
    comments: 5
  },
  {
    id: 2,
    author: {
      name: "Carlos Ruiz",
      username: "carlos_strong",
      avatar: "https://i.pravatar.cc/150?img=2"
    },
    content: "Nuevo PR en press de banca! 🔥 Llegué a 100kg por primera vez",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=300&fit=crop",
    likes: 45,
    timestamp: "2024-10-25T09:15:00Z",
    comments: 12
  },
  {
    id: 3,
    author: {
      name: "Ana López",
      username: "ana_runner",
      avatar: "https://i.pravatar.cc/150?img=3"
    },
    content: "Corrí 10km esta mañana 🏃‍♀️ ¡Preparándome para el maratón!",
    image: null,
    likes: 18,
    timestamp: "2024-10-25T07:00:00Z",
    comments: 3
  }
];