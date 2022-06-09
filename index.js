function receivesAFunction (callback) {
return callback()
}

function returnsANamedFunction(){
return function test2(){return}
}

function returnsAnAnonymousFunction(){
  return  () => ''

}
