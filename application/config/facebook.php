<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------
|  Facebook API Configuration
| -------------------------------------------------------------------
|
| To get an facebook app details you have to create a Facebook app
| at Facebook developers panel (https://developers.facebook.com)
|
|  facebook_app_id               string   Your Facebook App ID.
|  facebook_app_secret           string   Your Facebook App Secret.
|  facebook_login_redirect_url   string   URL to redirect back to after login. (do not include base URL)
|  facebook_logout_redirect_url  string   URL to redirect back to after logout. (do not include base URL)
|  facebook_login_type           string   Set login type. (web, js, canvas)
|  facebook_permissions          array    Your required permissions.
|  facebook_graph_version        string   Specify Facebook Graph version. Eg v3.2
|  facebook_auth_on_load         boolean  Set to TRUE to check for valid access token on every page load.
*/

/*           Prueba            */
$config['facebook_app_id']                = '463313011119300';
$config['facebook_app_secret']            = '02ff6c962a1a91ea40de92a5c0a3e854';
$config['facebook_login_redirect_url']    = 'login/inicio_facebook';
$config['facebook_logout_redirect_url']   = '/';
$config['facebook_login_type']            = 'web';
$config['facebook_permissions']           = array('email');
$config['facebook_graph_version']         = 'v3.2';
$config['facebook_auth_on_load']          = TRUE;


/*           Original            */
/* $config['facebook_app_id']                = '363027077744255';
$config['facebook_app_secret']            = '4b8a9bb8f79ca144175c7e69494c9dd0';
$config['facebook_login_redirect_url']    = 'login/inicio_facebook';
$config['facebook_logout_redirect_url']   = '/';
$config['facebook_login_type']            = 'web';
$config['facebook_permissions']           = array('email');
$config['facebook_graph_version']         = 'v3.2';
$config['facebook_auth_on_load']          = TRUE; */