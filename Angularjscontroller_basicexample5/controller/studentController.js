<script>
function studentController($scope)
{
$scope.student={
firstName:"Ans",
lastName:"Patnaik",
fullName:function()
{
var studentObject;
studentObject=$scope.student;
return studentObject.firstName+""+studentObject.lastName;
}
};
}
</script>
