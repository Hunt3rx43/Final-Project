	var aiNums = new Array;
	
	function vCreate() 
	{
		document.getElementById('taOut').value = '';
		iRows = parseInt(document.getElementById('txtRows').value);
		iCols = parseInt(document.getElementById('txtCols').value);

		aiNums = new Array(iRows)

		var i, j;
		for (i = 0; i < iRows; i++)
			aiNums[i] = new Array(iCols);

		for (i = 0; i < iRows; i++) 
		{
			for (j = 0; j < iCols; j++) 
			{
				aiNums[i][j] = Math.floor(Math.random() * 100) + 1;
				document.getElementById('taOut').value += aiNums[i][j] + '\t';
			}
			document.getElementById('taOut').value += '\r';
		}
	}

	function fMaximum()
	{
	    var fMax = aiNums[0][0];
	    var i, j;

	    for (i = 0; i < iRows; i++)
	        for (j = 0; j < iCols; j++)
	            if (aiNums[i][j] > fMax)
	                fMax = aiNums[i][j];

	    return fMax;
	}

    function fMinimum()
	{
	    var fMin = aiNums[0][0];
	    var i, j;

	    for (i = 0; i < iRows; i++)
	        for (j = 0; j < iCols; j++)
	            if (aiNums[i][j] < fMin)
	                fMin = aiNums[i][j];

	    return fMin;
	}

    function fSum()
    {
        var fSumVal = 0;
        var i, j;

        for (i = 0; i < iRows; i++)
            for (j = 0; j < iCols; j++)
                fSumVal += aiNums[i][j];

        return fSumVal;
    }

    function vAdd()
    {
        var aifSums = new Array;
        
        var fSumVal = 0;
        var i, j, n, t;

        for (n = 0; n < iCols; n++)
            aifSums[n] = 0;
        for (i = 0; i < iRows; i++)
            for (j = 0; j < iCols; j++)
                aifSums[j] += aiNums[i][j];
        for (t = 0; t < iCols; t++)
            document.getElementById('taOut').value += aifSums[t] + '\t'
    }