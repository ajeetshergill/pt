!function(){function n(n,e,t){switch(e){case Const.top_left:return new Pair(n).connect(n.$add(t,t));case Const.top_right:return new Pair(n).connect(n.$add(-t,t));case Const.bottom_left:return new Pair(n).connect(n.$add(t,-t));case Const.bottom_right:return new Pair(n).connect(n.$add(-t,-t));case Const.top:return new Pair(n).connect(n.$add(0,t));case Const.bottom:return new Pair(n).connect(n.$add(0,-t));case Const.left:return new Pair(n).connect(n.$add(t,0));default:return new Pair(n).connect(n.$add(-t,0))}}function e(){for(d=0;d<r.length;d++){var e=c.quadrant(r[d],2),o=n(r[d],e,12);a.stroke(t["a"+(e%4+1)],1.5),a.line(new Pair(o.p1.x,o.y).connect(o.x,o.y)),a.line(new Pair(o.x,o.y).connect(o.x,o.p1.y)),a.fill(t.c4).stroke(!1),a.point(o.p1,3,!0)}}window.demoDescription="Distribute points evenly on a surface. Check the quadrant of each point in relation to mouse position. Draw a corresponding corner for each point.";for(var t={a1:"#ff2d5d",a2:"#42dc8e",a3:"#2e43eb",a4:"#ffe359",b1:"#96bfed",b2:"#f5ead6",b3:"#f1f3f7",b4:"#e2e6ef",c1:"#111",c2:"#567",c3:"#abc",c4:"rgba(255,255,255,.9)"},o=new CanvasSpace("point-quadrant-demo",t.c1).display(),a=new Form(o.ctx),r=[],c=new Vector,i={x:Math.floor((o.size.x-20)/10),y:Math.floor((o.size.y-20)/20)},d=0;d<i.x;d++)for(var s=0;s<i.y;s++)r.push(new Vector(10+i.x*d,10+i.y*s));o.add({animate:function(n,t,o){e()},onMouseAction:function(n,e,t,o){"move"===n&&c.set(e,t)}}),o.bindMouse(),o.play()}();