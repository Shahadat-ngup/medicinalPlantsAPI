const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Example Plant data
const plantsData = [
  {
    id: '1',
    name: 'Aloe Veras',
    image: 'https://www.aloeveraaustralia.com.au/wp-content/uploads/2021/03/1463934-400x225.jpg', // Replace with actual image URL
    diseasesCured: [
      'Treats burns',
      'Helps heal wounds',
      'Reduces skin inflammation',
      'Relieves sunburn'
    ],
    precautions: [
      'Avoid excessive intake as it may cause stomach discomfort',
      'May trigger allergic reactions in some individuals'
    ],
    uses: [
      'Topical application for skin irritation',
      'Used as a natural moisturizer',
      'Can be consumed in moderation for digestive health'
    ]
  },
  {
    id: '2',
    name: 'Lavender',
    image: 'https://pacificscents.com.au/wp-content/uploads/2017/08/lavender-flowers.jpg', // Replace with actual image URL
    diseasesCured: [
      'Reduces anxiety',
      'Relieves headaches',
      'Improves sleep'
    ],
    precautions: [
      'May cause allergic reactions in sensitive individuals',
      'Avoid using in large doses due to drowsiness'
    ],
    uses: [
      'Aromatherapy for stress relief',
      'Used in massages for relaxation',
      'Lavender oil for minor burns and cuts'
    ]
  },
  // Add more plant data here...
];

app.get('/api/plants', (req, res) => {
  res.json(plantsData);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
