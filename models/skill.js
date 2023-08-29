const skills = [
    {id: 125223, skill: 'Javascript', done: true},
    {id: 127904, skill: 'Git', done: true},
    {id: 139608, skill: 'Node', done: false}
  ];
	
  module.exports = {
    getAll,
    getOne
  };

  function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    // The Array.prototype.find iterator method is
    // ideal for finding objects within an array
    return skills.find(skill => skill.id === id);
  }
	
  function getAll() {
    return skills;
  }