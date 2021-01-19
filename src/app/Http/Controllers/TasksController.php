<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Tasks;

class TasksController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $results = Tasks::orderByDesc('id')->get();
        return $results;
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {   
        $task = new Tasks();
        $task->name = $request->name;
        $task->description = $request->description;
        $task->status = $request->status;
        $task->save();

        return $task;

    }

            /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $task = Tasks::where('id', '=', $id)->first(); 
        return $task;
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $task = Tasks::findOrFail($id);
        $task->name = $request->name;
        $task->description = $request->description;
        $task->status = $request->status;
        $task->update();

        return $task;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $task = Tasks::findOrFail($id);
        $task->delete();
        return $task;
    }


}
