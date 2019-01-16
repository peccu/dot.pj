export default class Sample{
  constructor(val){
    // eslint-disable-next-line no-console
    console.log('constructed');
    this.val = val;
  }

  bow(){
    return this.val;
  }
}
