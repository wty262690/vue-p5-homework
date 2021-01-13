<template>
  <div class="container">
    <div class="p5Canvas"></div>
  </div>
</template>

<script>
import P5 from 'p5';

export default {
  data() {
    return {
      p5Canvas: null,
    }
  },
  created() {
    const sketch = p5 => {
        let w = 500;
        let h = 400;
        var x;
        var y;
        var r = 30;
        let painting = false;
        let index=0;
        let fillcolor = [];
        var cx;
        var cy;
        let left=2;
        let a=0;
        let g=0;
        let b=0;
        var c = 0;

        // let w = window.innerWidth;
        // let h = window.innerHeight;

        p5.setup = () => {
            p5.createCanvas(w, h);
            x = 0;
            y = 0;
            
        };

        p5.draw = () => {
            p5.background(238,169,169);
            var dstx = [];
            var dsty = [];
            var count=0;  
            // p5.background(33, 33, 33)
            for(var i=0;i<16;i++){
              for(var j=0;j<16;j++){
                p5.noStroke();
                p5.rect(x+i*r, y+j*r, x+i*r+r, y+j*r+r);
                if (j===3){
                  if((i>=left && i<=left+3) || (i>=left+8 && i<=left+11)){
                    p5.fill (0);
                  }
                }
                else if (j===1){
                  if((i>=left+2 && i<=left+3) || (i>=left+8 && i<=left+9)){
                    p5.fill(0);
                  }
                }
                else if((i===left+1 || i===left+2 || i===left+9 || i===left+10) && j>=4 && j<=5){
                  p5.fill(0);

                }
                else if(j===8 && (i>=left+5 && i<=left+6)){
                  p5.fill(0);
                }
                
                else{
                  p5.fill(223); 
                }
                dstx[count]=x+i*r;
                dsty[count]=y+j*r;
                
                
                for (var k=0; k<22; k++){
                  if (fillcolor[k]===count){
                    if (j===3 || j===5){
                      if((i>=left && i<=left+4) ||( i>=left+7 && i<=left+11)){
                        p5.fill((254+a)%255,(223+g)%255,225); 
                      }
                      else{
                        p5.fill(165+a%255,(222+g)%255,228);  
                      }
                    }
                    else if (j===1){
                      if((i>=left+2 && i<=left+3) || (i>=left+8 && i<=left+9)){
                        p5.fill((254+a)%255,(223+g)%255,225); 
                      }
                      else{
                        p5.fill((165+a)%255,(222+g)%255,228);  
                      }
                    }
                    else if(j===8 && (i>=left+2 && i<=left+9)){
                      p5.fill((254+a)%255,(223+g)%255,225);

                    }
                    else if(j>=8 && j<=9){
                      if(i>=left+6 && i<=left+8){
                        p5.fill((254+a)%255,(223+g)%255,225); 
                      }
                      else{
                        p5.fill((165+a)%255,(222+g)%255,228);
                      }
                    }
                    else if(j===10){
                      if(i===left+7 || i===left+8){
                        p5.fill((254+a)%255,(223+g)%255,225);  
                      }
                      else{
                        p5.fill((165+a)%255,(222+g)%255,228); 
                      }
                    }
                    else if(j===11){
                      if(i===left+7){
                        p5.fill((254+a)%255,(223+g)%255,225); 
                      }
                      else{
                        p5.fill((165+a)%255,(222+g)%255,228);  
                      }
                    }
                    else{
                      p5.fill((165+a)%255,(222+g)%255,228);  
                    }
                    p5.rect(x+i*r, y+j*r, x+i*r+r, y+j*r+r);
                if (j===3){
                  if((i>=left && i<=left+3) || (i>=left+8 && i<=left+11)){
                    p5.fill (0);
                  }
                  else{
                    p5.fill(223); 
                  }
                }
                else if (j===1){
                  if((i>=left+2 && i<=left+3) || (i>=left+8 && i<=left+9)){
                    p5.fill(0);
                  }
                  else{
                    p5.fill(223); 
                  }
                }
                else if((i===left+1 || i===left+2 || i===left+9 || i===left+10) && j>=4 && j<=5){
                    p5.fill(0);

                }
                else if(j===8 && (i>=left+5 && i<=left+6)){
                  p5.fill(0);
                }
                
                else{
                  p5.fill(223); 
                }
                  } 
                }
                count++;
              }
            }
            
            
            if(painting){
              for (var i=0; i<256; i++){
                let enter=true;
                if (dstx[i]+r/2>=p5.mouseX && dstx[i]-r/2<=p5.mouseX && dsty[i]+r/2>=p5.mouseY && dsty[i]-r/2<=p5.mouseY){
                  for (var k=0; k<22; k++){
                    if (fillcolor[k]===i){
                        enter=false;
                        break;
                    } 
                  }
                  if(enter){
                    fillcolor[index%21]=i;
                    if (i+1<=256){
                      index++;
                      fillcolor[index%21]=i+1;
                    }
                    if (i+16<=256){
                        index++;
                        fillcolor[index%21]=i+16;
                      }
                    if (i-1>=0){
                        index++;
                        fillcolor[index%21]=i-1;
                      }
                  
                    if (i-16>=0){
                        index++;
                        fillcolor[index%21]=i-16;
                      }
                    
                    index++;  
                    break;
                  }
                  }
              }
            }
            painting=false;

        };

        // create methods:
        p5.mousePressed=()=> {
          a=p5.random(255);
          g=p5.random(255);
          b=p5.random(255);
          painting = true;
          let previousx = p5.mouseX;
          let previousy = p5.mouseY;
        };
        p5.mouseReleased=()=> {
          painting = false;
        }
    }

    this.p5Canvas = new P5(sketch, 'p5Canvas');
  },
  unmounted () {
    this.p5Canvas = null;
  },
}
</script>

<style>
#p5Canvas {
  width: 100vw;
  position: relative;
}

main {
  margin: 0 auto;
  width: 90vw;
}
</style>