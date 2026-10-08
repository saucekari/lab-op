'use strict';


const phonebookArray = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Caesar Joke', phone: '+380441112233' },
  { name: 'Seneca El', phone: '+380447778899' },
];

const findPhoneByNameArray = (name) => {
  for (const item of phonebookArray) {
    if (item.name === name) {
      return item.phone;
    }
  }
  return null;
};


const phonebookHash = {
  'Marcus Aurelius': '+380445554433',
  'Caesar Joke': '+380441112233',
  'Seneca El': '+380447778899',
};

const findPhoneByNameHash = (name) => phonebookHash[name] || null;

console.log('Finding in array:', findPhoneByNameArray('Caesar Joke'));
console.log('Finding in hash:', findPhoneByNameHash('Marcus Aurelius'));