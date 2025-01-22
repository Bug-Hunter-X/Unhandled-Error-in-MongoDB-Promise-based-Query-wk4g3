```javascript
const query = { name: 'John Doe' };

db.collection('users').findOne(query, { projection: { _id: 0, email: 1 } }).then(result => {
  if (result) {
    console.log(result.email);
  } else {
    console.log('User not found');
  }
});
```