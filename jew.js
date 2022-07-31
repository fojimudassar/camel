function myname(){
    let zakatCamal=document.getElementById('camal').value;
    let result;
    if (zakatCamal>=150){
       result="تین حقے"
    }else if (zakatCamal>=145){
         result="دو حقے اور ساتھ ایک بنت لبون";
    }else if(zakatCamal>=140){
         result="دو حقے اور چار بکریاں ";
    }else if(zakatCamal>=135){
         result="دو حقے تین بکریاں ";
    }else if(zakatCamal>=130){
         result="دو حقے دو بکریاں ";
    }else if(zakatCamal>=125){
         result="دو حقے ایک بکری ";
    }else if(zakatCamal>=120){
         result="دو حقے ";
    }else if(zakatCamal>=91){
         result="دو حقے  ";   
    }else if(zakatCamal>=76){
         result="دو بنت لبون ";
    }else if(zakatCamal>=61)
    {
         result="ایک جزعہ";
    }else if (zakatCamal>=46)
    {
         result="ایک حقہ";
    }else if (zakatCamal>=36){
         result="دو بنت  لبون";
    }else if(zakatCamal>=26){
         result="دو بنت مخاض";
    }else if (zakatCamal>=20){
         result="چار بکریاں  ";
    } 
    else if(zakatCamal>=15){
         result="تین بکریاں";
    }else if(zakatCamal>=10){
         result="دو بکریاں";
    }else if (zakatCamal>=5){
         result="ایک بکری"; 
    }else{
         result="اس میں زکاۃ نیں ہے";
    }
      document.getElementById('head').innerText=result;
}