export class Validations {
    
    /* Validação se o nome possui nome e sobrenome */
    static NomeSobrenome(nome: any) {
        var regexp = /\b[^\d\s]+\b/g;
        var count = 0;
        while (regexp.exec(nome.value))++count;
        
        return (count >= 2 || count == 0) ? null : { validaNome: { valid: false }};
    }  
    
    /* Validando formato do cpf */
    static Cpf(cpf: any) {
        let pf = cpf.value.replace(/[^\d]+/g,'');	
        
        if(!pf){return null;}
        
        (pf == '') ? { validaCpf: {valid: false}} : null;
        
        (pf.length != 11 || pf == "00000000000" || pf == "11111111111" || pf == "22222222222" || pf == "33333333333" || pf == "44444444444" || pf == "55555555555" || pf == "66666666666" || pf == "77777777777" || pf == "88888888888" || pf == "99999999999")
        ? { validaCpf: {valid: false}} : null;
        
        let add = 0;	
        for (let i=0; i < 9; i ++)		
        add += parseInt(pf.charAt(i)) * (10 - i);	
        let rev = 11 - (add % 11);	
        
        if (rev == 10 || rev == 11)		
            rev = 0;	
        
            (rev != parseInt(pf.charAt(9))) ? { validaCpf: {valid: false}} : null;
        add = 0;	
        
        for (let i = 0; i < 10; i ++)		
        add += parseInt(pf.charAt(i)) * (11 - i);	
        rev = 11 - (add % 11);	
        
        if (rev == 10 || rev == 11)
            rev = 0;
        
        return (rev != parseInt(pf.charAt(10))) ? { validaCpf: {valid: false}} : null;
    }
}

export class ValidationsPathers {
    static Cep = /^\d{5}[-]\d{3}$/;
    static Email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    static Data = /^((((0?[1-9]|[12]\d|3[01])[\.\-\/](0?[13578]|1[02]) [\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|[12]\d|30)[\.\-\/](0?[13456789]|1[012])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|1\d|2[0-8])[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|(29[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00)))|(((0[1-9]|[12]\d|3[01])(0[13578]|1[02])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|[12]\d|30)(0[13456789]|1[012])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|1\d|2[0-8])02((1[6-9]|[2-9]\d)?\d{2}))|(2902((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00))))$/;
    static Hora = /([01]?[0-9]|2[0-3]):[0-5][0-9]/
}