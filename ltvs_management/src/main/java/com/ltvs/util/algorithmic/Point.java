// This class serves as an extension to DiscreteFrechetDistance.java. A point is
// just a pair of values.
//
// @author - Stephen Bahr (sbahr@bu.edu)

package com.ltvs.util.algorithmic;

class Point {
	/** The dimensions of this point */
	protected int[] dimensions;

	public Point(int[] dims) {
		this.dimensions = dims;
	}
}
