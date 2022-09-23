import { sistemaBanco } from "";

export class Servicos extends sistemaBanco{
    rendaMensal: number;
    idade: number

    constructor(
        rendaMensal: number,
        nome: string
        
       
    ){
       super( nome,cpf,rg,saldo);
        this.rendaMensal = rendaMensal ;
        this.idade = rendaMensal;
    }

}oferecerCartao(){
    if(this.saldoMensal >= 1500 && this.saldoMensal<= 2499){
        console.log(`Oferecer cartão nacional.`);
    }else if(this.saldoMensal >= 2500 && this.saldoMensal<=4999){
        console.log(`Oferecer cartão Gold Internacional.`);
    }else if(this.saldoMensal>= 5000){
        console.log(`Oferecer cartão Black Internacional.`);
    }
}oferecerSeguro(){
    if(this.idade > 0 && this.idade >= 65){
        console.log(`Oferecer seguro de vida para o cliente ${this.nome}`);
    }else{
        console.log(`Ofercer seguro residencial para o cliente ${this.nome}`);

    }oferecerOdonto(){
    if(this.idade > 0 && this.idade >=15 ){
        console.log(`Oferecer plano Odontoógico Start ${this.nome}`);
    }else if(this.idade >= 16 && this.idade >=64 )
        console.log(`Ofercer plano Odontológico Plus ${this.nome}`);
     } else if(this.idade >65 && this.idade >=100 ){
     console.log(`Ofercer plano Odontológico Sênior ${this.nome}`);
     }

    
}