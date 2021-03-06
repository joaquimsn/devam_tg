'use strict';

var servicesModule = require('./_index');

/**
 * @ngInject
 */
function SessaoService($window, $rootScope) {
  this.storeUsuario = function(usuario) {
    console.log('Armazenado usuario', usuario);
    $window.sessionStorage.usuario = JSON.stringify(usuario);
  };

  this.getUsuario = function() {
    var usuario = {};
    if($window.sessionStorage.usuario) {
      usuario = JSON.parse($window.sessionStorage.usuario);
    }
    return usuario;
  };

   this.storeModoVisao = function(modo) {
    $window.sessionStorage.modoVisao = JSON.stringify(modo);
  };

  this.getModoVisao = function() {
    var modoVisao = JSON.parse($window.sessionStorage.modoVisao || {});
    return modoVisao;
  };

  this.storeProjeto = function(projeto) {
    $window.sessionStorage.projetoSelecionado = JSON.stringify(projeto);
    $rootScope.projetoContaSelecionado = projeto;
  };

  this.getProjeto = function() {
    var projeto = {};
    if($window.sessionStorage.projetoSelecionado) {
      projeto = JSON.parse($window.sessionStorage.projetoSelecionado || {});
    }
    return projeto;
  };

  this.storeModulo = function(modulo) {
    $window.sessionStorage.moduloSelecionado = JSON.stringify(modulo);
  };

  this.getModulo = function() {
    var modulo = JSON.parse($window.sessionStorage.moduloSelecionado || {});
    return modulo;
  };

  this.storeFuncionalidade = function(funcionalidade) {
    $window.sessionStorage.funcionalidadeSelecionado = JSON.stringify(funcionalidade);
  };

  this.getFuncionalidade = function() {
    var funcionalidade = JSON.parse($window.sessionStorage.funcionalidadeSelecionado || {});
    return funcionalidade;
  };
}

servicesModule.service('SessaoService', SessaoService);