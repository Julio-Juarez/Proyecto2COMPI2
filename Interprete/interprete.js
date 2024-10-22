
import { Entorno } from "./entorno.js";
import { BaseVisitor } from "../GeneradorDeArchivos/visitor.js";



export class InterpreterVisitor extends BaseVisitor {

    constructor() {
        super();
        this.entornoActual = new Entorno();
        this.salida = '';
    }

    /**
      * @type {BaseVisitor['visitNumero']}
      */
    visitNumero(node) {
        return node.valor;
    }

    /**
      * @type {BaseVisitor['visitDeclaracionVariable']}
      */
    
    visitDeclaracionVariable(node) {
        
        
        const tipoVariable = node.tipo;
        const nombreVariable = node.id;
        const valorVariable = node.exp.accept(this);

        this.entornoActual.setVariable(tipoVariable ,nombreVariable, valorVariable);

        
    }
    
    /**
      * @type {BaseVisitor['visitDeclaracionVariableSinValor']}
      */
    visitDeclaracionVariableSinValor(node) {
        const tipoVariable = node.tipo;
        const nombreVariable = node.id;

        this.entornoActual.setVariable(tipoVariable ,nombreVariable,null);
    }
    
    /**
      * @type {BaseVisitor['visitAsignacionValor']}
      */
    visitAsignacionValor(node) {
        
        const valor = node.asig.accept(this);
        const nombreVariable = node.id;
        
        this.entornoActual.asignacionVariable(nombreVariable,valor);
        
        return valor;
        //throw new Error('Metodo visitAsignacionValor no implementado');
    }

    /**
      * @type {BaseVisitor['visitOperacionBinaria']}
      */
    /*visitOperacionBinaria(node) {
        const izq = node.izq.accept(this);
        const der = node.der.accept(this);

        switch (node.op) {
            case '+':
                return izq + der;
            case '-':
                return izq - der;
            case '*':
                return izq * der;
            case '/':
                return izq / der;
            case '<=':
                return izq <= der;
            case '>=':
                return izq >= der;
            case '<':
                return izq < der;
            case '>':
                return izq > der;
            case '==':
                return izq == der;
            case '!=':
                return izq != der;
            default:
                throw new Error(`Operador no soportado: ${node.op}`);
        }
    }
      */
    /**
      * @type {BaseVisitor['visitOperacionUnaria']}
      */
    /*visitOperacionUnaria(node) {
        const exp = node.exp.accept(this);

        switch (node.op) {
            case '-':
                return -exp;
            default:
                throw new Error(`Operador no soportado: ${node.op}`);
        }
    }*/

    /**
      * @type {BaseVisitor['visitAgrupacion']}
      */
    /*visitAgrupacion(node) {
        return node.exp.accept(this);
    }*/

    


    /**
     * @type {BaseVisitor['visitDeclaracionVariable']}
     */
    /*visitDeclaracionVariable(node) {
        const nombreVariable = node.id;
        const valorVariable = node.exp.accept(this);

        this.entornoActual.setVariable(nombreVariable, valorVariable);
    }
        */


    /**
      * @type {BaseVisitor['visitReferenciaVariable']}
      */
    /*visitReferenciaVariable(node) {
        const nombreVariable = node.id;
        return this.entornoActual.getVariable(nombreVariable);
    }/*


    /**
      * @type {BaseVisitor['visitPrint']}
      */
    /*visitPrint(node) {
        const valor = node.exp.accept(this);
        this.salida += valor + '\n';
    }*/


    /**
      * @type {BaseVisitor['visitExpresionStmt']}
      */
    /*visitExpresionStmt(node) {
        node.exp.accept(this);
    }*/


    /**
      * @type {BaseVisitor['visitAsignacion']}
      */
    /*visitAsignacion(node) {

        const valor = node.asig.accept(this);
        const nombreVariable = node.id;
        
        this.entornoActual.setVariable(nombreVariable,valor);
        return valor;
    }*/

    /**
      * @type {BaseVisitor['visitBloque']}
      */
    /*
    visitBloque(node){
        const entornoAnterior = this.entornoActual;
        this.entornoActual= new Entorno(entornoAnterior);

        node.dcls.forEach(dcl => dcl.accept(this));

        this.entornoActual= entornoAnterior;

    }*/

    /**
      * @type {BaseVisitor['visitIf']}
      */
    /*visitIf(node) {

        const cond = node.cond.accept(this);

        if (cond) {
            node.stmtIf.accept(this);
            return
        }
        if (node.stmtElse) {
            node.stmtElse.accept(this);
        }
        throw new Error('Metodo visitIf no implementado');
    }
*/
    /**
      * @type {BaseVisitor['visitWhile']}
      */
 /*   visitWhile(node){
        
        while (node.cond.accept(this)) {
            node.stmt.accept(this);
        }

    }
        */

}