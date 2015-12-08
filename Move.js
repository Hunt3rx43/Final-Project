//This is an examlple external javascript file.
//It contains only javascript code.

 //define a funtion
        function vMove()
        {
        	var strBox2;
			strBox2 = document.getElementById('txtBox2').value;
            document.getElementById('txtBox2').value = document.getElementById('txtBox1').value;
            document.getElementById('txtBox1').value = strBox2;
        }