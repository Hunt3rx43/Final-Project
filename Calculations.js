		function vCalculate(fLength, fWidth)
        {
            if (isNaN(fLength))
                document.getElementById('txtLeng').value = "Please type in valid numbers.";
            else if (isNaN(fWidth))
                document.getElementById('txtWidt').value = "Please type in valid numbers.";
            else
            {
                fLength = parseFloat(fLength);
                fWidth = parseFloat(fWidth);
                document.getElementById('txtPeri').value = fLength + fLength + fWidth + fWidth;
                document.getElementById('txtArea').value = fLength * fWidth;
            }
        }