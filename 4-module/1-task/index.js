function makeFriendsList(friends) {
  let list = document.createElement('ul');
  friends.forEach( friend => {
    const item = document.createElement('li');
    item.textContent = `${friend.firstName} ${friend.lastName}`;
      list.appendChild(item);
  } );
  return list;
}
