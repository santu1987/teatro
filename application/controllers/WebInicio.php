<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class WebInicio extends CI_Controller
{
    function __construct(){
      parent::__construct();
      $this->load->database();
      $this->load->library('session');
      $this->load->model('WebInicio_model');
      $this->load->helper('meses');

    }

    public function index($idioma=1){
        $datos_menu = "";
        $datos="";
        $this->load->view('web/header');
        $this->load->view('web/menu',$datos_menu);
        $this->load->view('web/home',$datos);
        $this->load->view('web/footer');
    }
    
    public function consultarObrasFiltros(){
        $res = [];
        $datos= json_decode(file_get_contents('php://input'), TRUE);
        $respuesta = $this->WebInicio_model->consultarObrasFiltros($datos["cod_obra"]);
      
        foreach ($respuesta as $key => $value) {
            $valor = $value;
            $fecha = $value->fecha_obra;
            $vector_fecha = explode("-",$fecha);
            $valor->dias = $vector_fecha[2];
            $valor->mes = strtoupper(meses($vector_fecha[1]));
            $res[] = $valor;
        }
        $listado = (object)$res;
        die(json_encode($listado));
    }

    public function ver_obra($cod_obra){
        $datos_menu = "";
        $datos["cod_obra"]=$cod_obra;
        
        //$respuesta = $this->WebInicio_model->consultarObrasFiltros($id_obra);
        $this->load->view('web/header');
        $this->load->view('web/menu');
        $this->load->view('web/ver_obras',$datos);
        $this->load->view('web/footer');
    }

    public function registrarCompra(){
        $datos= json_decode(file_get_contents('php://input'), TRUE);
        $fecha_compra = date("Y-m-d");
        $mensaje["mensaje"]="";
        //registrar venta
        $data = array(
            "cod_obra" => $datos["cod_obra"],
            "comprador" => $datos["identificador"],
            "fecha_compra" => $fecha_compra,
        );
        //validar que el comprador exista
        $validar_compra = $this->WebInicio_model->existeComprador($data["comprador"]);
        if($validar_compra>0){
            //-----------------
            $registro_compra = $this->WebInicio_model->guardarCompra($data);
            if($registro_compra){
                 //disminuir disponible
                //hacer update de disponible
                $disponible = $datos["disponible"]-1;
                $cod_obra = intval($datos["cod_obra"]);
                $data_obra = array(
                    "disponible" => $disponible
                );
                $registro_obra = $this->WebInicio_model->actualizarObra($cod_obra,$data_obra);
                if($registro_obra){
                    $mensaje["mensaje"]=true;
                }else{
                    $mensaje["mensaje"]=false;
                }
            }else{
                $mensaje["mensaje"] = false;
            }
            //-----------------
        }else{
            $mensaje["mensaje"]="no_existe";
        }
        
       die(json_encode($mensaje));

    }
}
