@extends('layouts.app')

@section('title', 'Main page')

@section('content')
    <div class="wrapper wrapper-content animated fadeInRight">
        <div id="app">
            <div class="row">
                <div class="col-md-7">
                    <div class="ibox">
                        <div class="ibox-title">GIS</div>
                        <div id="map" class="ibox-content" v-el:map>
                            <div>Test</div>
                            <style>
                                 .ibox-content {background-color: red; height:300px;width:500px;}
                            </style>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
