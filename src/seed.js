function generateVoteCount() {
  return Math.floor(Math.random() * 100) + 1; 
}
const Seed = {
     products : [
        {
            id: 1,
            title: 'Ram',
            description: 'On-demand sand castle construction expertise.',
            url: ' www.google.com',
            votes: generateVoteCount(),
            submitterAvatarUrl: '/avatars/avatar.png',
             productImageUrl: '/products/product.png',
   
        },
        {
            id: 2,
            title: 'Sham',
            description: 'On-demand sand castle construction expertise.',
              url: ' www.google.com',
            votes: generateVoteCount(),
            submitterAvatarUrl: '/avatars/avatar2.png',
             productImageUrl: '/products/product2.png',
        },
        {
            id: 3,
            title: 'Hari',
            description: 'On-demand sand castle construction expertise.',
             url: ' www.google.com',
            votes: generateVoteCount(),
          submitterAvatarUrl: '/avatars/avatar3.png',
             productImageUrl: '/products/product3.png',
        },
    ]
    
}
export default Seed