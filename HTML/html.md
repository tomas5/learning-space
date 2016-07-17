# HTML

## Inline Elements vs Block

[HTML Block and Inline Elements - W3Schools](http://www.w3schools.com/html/html_blocks.asp).

[Inline elements - HTML (HyperText Markup Language) | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elemente).

## body

  ____________________________
 |           margin           |
 |   _______________________  |
 |  |        border         | |
 |  |   _________________   | |
 |  |  |     padding     |  | |
 |  |  |   ___________   |  | |
 |  |  |  |  content  |  |  | |
 |  |  |  |___________|  |  | |
 |  |  |_________________|  | |
 |  |_______________________| |
 |____________________________|

```html
body {
	margin-top: 100px;
	margin-right: 40px;
	margin-bottom: 10px;
	margin-left: 70px;
}
```
same as:

```html
body { 
	margin: 100px 40px 10px 70px;
}
```

		top
	  ___________________
	 |    |  100px  |    |
	 | - - - - - - - - - |
	 |    |		|    |
 left	 |70px|  	|40px|	  right
	 |    |         |    |
	 | -  - - - - - - - -|
	 |    |   10px  |    |
 	 |___________________|
	        bottom



