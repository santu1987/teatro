<?php 
 if ( ! defined('BASEPATH')) exit('No direct script access allowed');
        if (!function_exists('meses')) {
            function meses($mes){
                    switch ($mes) {
                        case 'January':
                            $mes2 = 'Ene';
                            break;
                        case 'February':
                            $mes2 = 'Febr';
                            break;
                        case 'March':
                            $mes2 = 'Mar';
                            break;
                        case 'April':
                            $mes2 = 'Abr';
                            break; 
                        case 'May':
                            $mes2 = 'May';
                            break; 
                        case 'June':
                            $mes2 = 'Jun';
                            break;
                        case 'July':
                            $mes2 = 'Jul';
                            break;
                        case 'August':
                            $mes2 = 'Ago';
                            break;
                        case 'September':
                            $mes2 = 'Sep';
                            break;
                        case 'October':
                            $mes2 = 'Oct';
                            break;
                        case 'November':
                            $mes2 = 'Nov';
                            break;
                        case 'December':
                            $mes2 = 'Dic';
                            break;
                        //------------------------    
                        case 1:
                            $mes2 = 'Ene';
                            break;
                        case 2:
                            $mes2 = 'Febr';
                            break;
                        case 3:
                            $mes2 = 'Mar';
                            break;
                        case 4:
                            $mes2 = 'Abr';
                            break; 
                        case 5:
                            $mes2 = 'May';
                            break; 
                        case 6:
                            $mes2 = 'Jun';
                            break;
                        case 7:
                            $mes2 = 'Jul';
                            break;
                        case 8:
                            $mes2 = 'Ago';
                            break;
                        case 9:
                            $mes2 = 'Sep';
                            break;
                        case 10:
                            $mes2 = 'Oct';
                            break;
                        case 11:
                            $mes2 = 'Nov';
                            break;
                        case 12:
                            $mes2 = 'Dic';
                            break;                                    
                        default:
                            # code...
                            break;
                    }
                    return $mes2;
            } 
    }

