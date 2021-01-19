<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRentedsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('renteds', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->date('date');
            $table->bigInteger('client_id')->unsigned();
            $table->bigInteger('user_id')->unsigned();
           
            $table->timestamps();

            //relations
            $table->foreign('client_id')->references('id')->on('clients');
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('renteds');
    }
}
