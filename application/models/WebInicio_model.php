<?php

if (!defined('BASEPATH')) exit ('No direct script access allowed');

Class WebInicio_model extends CI_Model{
	//-----
	public function guardarCompra($data){
		if($this->db->insert("ventas", $data)){
			return true;
		}else{
			return false;
		}
	}
	//-----
	public function actualizarObra($codigo_obra,$data){
		$this->db->where('cod_obra', $codigo_obra);

		if($this->db->update("obra", $data)){
			
			return true;
		}else{
			return false;
		}
	}
	//-----
	public function consultarObrasFiltros($cod_obra){
		$hoy = date("Y-m-d");

		if($cod_obra!=""){
			$this->db->where('a.cod_obra', $cod_obra);
		}

		$this->db->where('a.disponible >', 0);
		$this->db->where('a.fecha_obra >=', $hoy);
		$this->db->order_by('a.id');
		$this->db->select('a.*');
		$this->db->from('obra a');
		$res = $this->db->get();
		//print_r($this->db->last_query());die("x");

		if($res){
			return $res->result();
		}else{
			return false;
		}
	}
	//------
	public function existeComprador($identificador){
		if($identificador!="")
			$this->db->where('id', $identificador);
        $this->db->select('*');
        $this->db->from('usuarios');
        $res = $this->db->get();
		$recordset = $res->result();
		if(	$recordset){
			if(count($recordset)>0)
				return intval($recordset[0]->id);
			else
				return 0;
		}else{
			return 0;
		}
		
	}
}
