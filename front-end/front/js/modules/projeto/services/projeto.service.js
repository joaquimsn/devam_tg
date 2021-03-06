'use strict';

var servicesModule      = require('./_index');

/**
 * @ngInject
 */
function ProjetoService($http, requestApiService, SessaoService, ContaService) {
  this.buscarTodosPorUsuario = function(cb) {
    requestApiService.get(cb, '/contas/' + SessaoService.getUsuario()._id + '/projetos');
  };

  this.buscarTodosParaRelatorio = function(cb) {
    requestApiService.getNo(cb, '/contas/' + SessaoService.getUsuario()._id + '/projetos');
  };

  this.cadastrar = function(callback, data) {
    function cb(projeto) {
      //ContaService.adicionarProjeto(projeto, SessaoService.getUsuario()._id);
      callback(projeto);
    }

    requestApiService.post(cb, data, '/projetos');
  };

  this.adicionarModulo = function(modulo) {
    function retornoCb(data) {
      console.log('Adicionado modulo ao projeto', data);
    }
    var projetoModulo = {
      modulo: modulo
    };
    requestApiService.postNo(retornoCb, projetoModulo, '/projetos/' + SessaoService.getProjeto()._id + '/modulos');
  };
}

servicesModule.service('ProjetoService', ProjetoService);