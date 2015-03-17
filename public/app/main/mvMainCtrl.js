angular.module('app').controller('mvMainCtrl',function($scope){
  $scope.courses = [
    {name: 'Course 1',featured: true, published: new Date('3/7/2015')},
    {name: 'Course 2',featured: true, published: new Date('3/14/2015')},
    {name: 'Course 3',featured: false, published: new Date('3/22/2015')},
    {name: 'Course 4',featured: true, published: new Date('4/7/2015')},
    {name: 'Course 5',featured: true, published: new Date('4/14/2015')},
    {name: 'Course 6',featured: false, published: new Date('5/7/2015')},
    {name: 'Course 7',featured: false, published: new Date('5/14/2015')},
    {name: 'Course 8',featured: true, published: new Date('6/7/2015')},
    {name: 'Course 9',featured: true, published: new Date('6/14/2015')},
    {name: 'Course 10',featured: false, published: new Date('7/7/2015')},
    {name: 'Course 11',featured: true, published: new Date('7/14/2015')},
    {name: 'Course 12',featured: true, published: new Date('7/22/2015')},
  ];

});
