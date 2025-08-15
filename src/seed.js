function generateVoteCount() {
  return Math.floor(Math.random() * 100) + 1; 
}
const Seed = {
     products : [
        {
            id: 1,
            title: 'Yellow Pail',
            description: 'On-demand sand castle construction expertise.',
            url: ' www.google.com',
            votes: generateVoteCount(),
            submitterAvatarUrl: '/avatars/avatar.png',
             productImageUrl: '/products/product.png',
   
        },
        {
            id: 2,
            title: 'Green Pail',
            description: 'On-demand sand castle construction expertise.',
              url: ' www.google.com',
            votes: generateVoteCount(),
            submitterAvatarUrl: '/avatars/avatar.png',
             productImageUrl: '/products/product.png',
        },
        {
            id: 3,
            title: 'Pink Paul',
            description: 'On-demand sand castle construction expertise.',
             url: ' www.google.com',
            votes: generateVoteCount(),
          submitterAvatarUrl: '/avatars/avatar.png',
             productImageUrl: '/products/product.png',
        },
    ]
    
}
export default Seed