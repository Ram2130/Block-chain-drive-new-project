pragma solidity >=0.8.2 <0.9.0;

contract Upload {
struct Acess
{ address user;
  bool access;
}
mapping(address =>mapping (address=>bool)) owernship;
mapping (address=>Acess[])acceslist;
mapping(address =>mapping (address=>bool)) previousData;
mapping (address=>string[])values;

function add(address user,string memory url) external 
{  values[user].push(url);

}
function allow(address user) external {
    owernship[msg.sender][user]=true;
    if(previousData[msg.sender][user])
    { for(uint i=0;i<acceslist[msg.sender].length;i++)
    {   if(acceslist[msg.sender][i].user==user)
    {  acceslist[msg.sender][i].access=true;

    }

    }}else{
     acceslist[msg.sender].push(Acess(user,true));
     previousData[msg.sender][user]=true;
    }
    
}
function disallow(address user) external {
    owernship[msg.sender][user]=false;
    for(uint i=0;i<acceslist[msg.sender].length;i++)
    if(acceslist[msg.sender][i].user==user)
    acceslist[msg.sender][i].access=false;


}

 function display(address _user) external view returns (string[] memory)
 { require(owernship[_user][msg.sender] || _user==msg.sender ,"you don't have any");
    return values[_user];

 }
 function shareAccess() public view returns(Acess[] memory){
  return acceslist[msg.sender];
 }
}