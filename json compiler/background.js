var syntax = {
"-":[3,4]
}

var data={"str":"hello"};

function evaluate(obj){
	if(typeof obj !="object"){
		return obj;
	}
	else{
		var key = Object.keys(obj)[0];
		switch(key){
			case "AND":
				var result = evaluate(obj.AND[0]);
				for(var i=1;i<obj.AND.length;i++){
					result = result && evaluate( obj.AND[i] );
				}
				return result;
				break;
			case "OR":
				var result = evaluate(obj.OR[0]);
				for(var i=1;i<obj.OR.length;i++){
					result = result || evaluate( obj.OR[i] );
				}
				return result;
				break;
			case "EQ":
				var result = evaluate(obj.EQ[0]) === evaluate(obj.EQ[1]);
				return result;
				break;
			case "GE":
				var result = evaluate(obj.GE[0]) >= evaluate(obj.GE[1]);
				return result;
				break;
			case "LE":
				var result = evaluate(obj.LE[0]) <= evaluate(obj.LE[1]);
				return result;
				break;
			case "SG":
				var result = evaluate(obj.SG[0]) > evaluate(obj.SG[1]);
				return result;
				break;
			case "SL":
				var result = evaluate(obj.SL[0]) < evaluate(obj.SL[1]);
				return result;
				break;
			case "NOT":
				var result = evaluate(obj.NOT[0]) != evaluate(obj.NOT[1]);
				return result;
				break;
			case "+":
				var result = evaluate(obj["+"][0]) + evaluate(obj["+"][1]); 
				return result;
				break;
			case "-":
				var result = evaluate(obj["-"][0]) - evaluate(obj["-"][1]); 
				return result;
				break;
			case "*":
				var result = evaluate(obj["*"][0]) * evaluate(obj["*"][1]); 
				return result;
				break;
			case "/":
				var result = evaluate(obj["/"][0]) * evaluate(obj["/"][1]); 
				return result; 
				break;
			case "VAR":
				var result=data[obj.VAR];
				return result;
				break;
		
			default:
				console.log("error");
		}
	}
}

console.log(evaluate(syntax));