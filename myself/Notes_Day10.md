# Topics for tomorrow presentation
consistency for repeatition
font awesome 
linear gradients 
radial gradients
pixel ,percentage,degrees
specificity order
!important>inline Style>ID>class>element-->
if an element has two selector which 
#when there is a clash of style then which one does  CSS pick is specificity-->Specificity
For example if there is an element selector andclass selector ,class selector has more priority
simplyfying the understanding 
.fun cool checks both the class selector if it is present
# Combinators
div>p 
# child selector
the paragraph will be selected inside div ,incase the paragraph within div is levels of p since child selector ,the grand child selector will not be selected
# descendant selector
div p -space -within div will be selected where within body will not be selected while p within span will also be selected
# difference between descendant selector and child selector
 # General sibling selector (~) 
 h1 p ,p ,p of div will be selected  h1 ~p so next level will not be selected
 on basis of hierarchy  level
# Adjacent sibling selector (+)
 p if it is next to p then last p will be selected  p+p- since p is selected then p which is adjacent to p will also be selected
  # how to do is --->imperative ,declarative is-----> what to do? whether css is imperative or declarative? CSS is declarative

 # eg
  p{
    color:pink
  }
# since the question asked is itself declarative -how you do is the scope  besides being  declared
#  div{
    & > p {
        color:orange
    }
}
# since it can be used in nesting also
# both doesnot need to have element selector as selector1>selector2 -it can be any  selector id ,class or  any nested class or id element but these are selectors

# combinators and as well selectors 
# sample use cases of the combinators and selectors 
# incase nesting is used we use specifically descendant  combinator only
# eg .poster-title +p+p ---->to overcome  we use  pseudo element selector and pseudo class selecor,
# the > h2 in case of element and for class not to use > we can use the class unique name alone
# mix and max combinations
# fa-bounce - for bouncing  movements
# pseudo_element _selector
# li i{
        color:violet;
      }
      > li +li i {
        color:green;

      }
#li:first_child   --------->Pseudo element selector---social child -first child -list -first list
first of type --------->Pseudo element selector
{
    color:
}
selector 1, selector 2,selector 3 can be used 

li:first-of-type.
li:-first-of-type.
li:last-child{
    color:violet
}

# :->pseudo class,::->psuedo selector*/
# nth child-it will start from 1
li:nth-child(1){
    color:violet;
}
#it will select as i as first child
only if it first child  it will return  in case of nth child
li:nth-child(6) can be used to address the same as above but the better way of presenting is as below
li:nth-child(odd) i{
    color:rgb(62,75,255)
}
/* 0<=n<=infinity>>
li:nth-child(3n)+1)i{
    color:rgb(62,75,255)
}-----use of AP ---->incase of the n varies from 0  to infinity) 4n +3--->where  second  element is only the number not place value
will refer the mdn  examples of references for the topics 
can try for css instead of javascript we can use the nth factor--->since it is declarative -->since logic will be faster in app creation-->so browser will be faster
# first noted gets filter and then it will take the even value when we use of in css
# external css
<link rel="stylesheet">href="abc.css"----external html
p{
    color: purple;
}-------->internal html
---overridden by means of external html ,the selector specifity is important
# inline can be overridden  whether it is external or internal 
whichever has higher specificity  how an inline has higher specificity it is only because of important 
# natural css behaviour- overridden but specificity matters when we divide by file 
# when inline has more specifity because it cannot be overridden
#incases better and various cases explanation
# external --html and css -separation of concern
# external css-multiple css file can be attached
# internal -small ---request can be avoided by  using internal -performance time will be better-delayed process-css will be send as internal css to avoid external -fcp-lighhouse-first contentful paint --browser -html and css-rendering tree -form-fcp will be lesser-
# summary -both the trees must be faster -so usage of internal -in terms of minimum css -incase of big files -external files need to be used--separation of concerns -2nd point is multiple files can be added 
#inline style should not be used since specificity is maximum-we need to write and do job perfectly using other html and css-not to use hacks -not advisable
quality will be inspected based on the demo --good quality code standards -avoid plagarism--other way to use the coding in better way 
# parent inheritance
emmet cheat sheet
# inheritance 
# non -inherited- border,margin, width,background
# the inherited has the lowest priority
#clip path maker in  css--enhances for user experience-mask
# apply   an image element on clip path
svg -50 percentage  
# blender animation tool
# aspect ratio :1:1 for either width or height given  16:9 is the ratio for the movie
# 21:9 ratio  for movie
# transition is used for animation alone
#hover is only for transition 
# keyframes property  in css
.2 s and for 100 milli seconds
transform :scale(1.1);
hover and active
# transform:scale(1.1) translate(-10px);
# micro animations lasts for some time only
# parental and for next element we can use the ambersand
# color and remove color  when  filter grayscale (100%) to remove color and filter.grapscale
#fff -white---blur
flex is the hero above  inline block  as inline block is the hybrid output of both inline and block
inline block takes the  default height but the heighest height of the child but flex takes the heightest height of the child  ,flex must be given to the parent
inline block respects the width but the words takes the space  as in accordance to the  movement
flex is the master of distributing the empty spaces as in accordances to the contents and flex end  and body's margin has default value 
and each child getting equal spaces as in accordance from the flex
space around and space between  - x width x/2 is along the sides 
# space evenly  -x along  evenly spreaded
justify content is implemented in flex
# align items :center
# align items:flex end
# stretch properties are used in accordingly  
# real life scenarios 
# box 
# sometimes odd cases are some gap :16 px
# margin when we use  margin right used 8 px
# both the margin  and space between are used gap can be used in flex 
# flex wrap used when space is not available it will come to next line spaces
Assignment:-
#flexbox froggy
# flexboxgame
#joshcomeau.com
#CSS-tricks.com
smashing magazine
# primary axis need to get through and revised  article and 2 games to be practised
to reduce the contents for designer the  enlarged session as well used for developers
&.hover{

}
nesting
nth child elements-psuedo  class -numbers 1,2,3
3n+3-=
nth child is also given one colon:
:: pseudo element
position or state 
pseudo class will denote the position
first type of :-
first class:-
example case by case
color:-
# when you visualize you become mastery  explain by cases so learning curve improves
# vikaasa template as well as vvc as well as exposure of IGMM
# ease in transition ---real life in animation---ease in and ease out -acceleration in  and out
# sample websites
# cubic-bezier.com --ease-in and ease -out-- for timing functions 
# align items and justify contents just like x and y: center options
# space around and space between
# flex direction for row and column
# align items and justify contents with space between
# row reverse and row column reverse -flex direction
#  column reverse for reverse the elements
# flow layout - block elements -primary axis in row and primary axis in column -cross axis for both primary
 # justify content will always spilt and put in the primary axis.
 # align items will move the item in cross axis-----justify and align items apply on parent
  # align  self used to stretch only on upside and down movements but not side directions---apply  on child
  # flex basis is just like width 
  # flex  grow and shrink is available
  # extra gap will get reduced  and flex grow is default is zero
  # empty spaces will be divided equally plus the width but extra width is equal
  1:ZZ2:1 ratio
  
  ## Flex
  
  - fix shrink:by 
  - default 1:--shrink by:-
  - flex -shrink
  scroll bar
  # to use color
  - nth child concept to grey out

  # semantic element#
  -articles-sections-containers
  -- minute observation
  --technique apply alone
  --li ::marker pseudo element
  ---mixed blende mode
