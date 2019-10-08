package com.ltvs.util.algorithmic;

import Jama.Matrix;

public class Frechet {

	public static double[] Frechet1(double[][] A, int k) throws Exception {
		double[] X1 = new double[24 * k];
		double[] X2 = new double[24 * k];
		for (int i = 0; i < 24 * k; i++) {
			X1[i] = i + 1;
			X2[i] = i + 1;
		}
		int a = A[0].length;
		double[] M = null;
		int t = 1;
		double[] Y1;
		double[] Y2;
		for (int j = 1; j < a; j++) {
			Y1 = A[1];
			Y2 = A[j];
			M[t] = frechet(X1, Y1, X2, Y2);
			t = t + 1;
		}
		return M;
	}

	public static double frechet(double[] X1, double[] Y1, double[] X2, double[] Y2, double... varargin) {
		double f = 0;
		int L1 = X1.length;
		int L2 = X2.length;

		if (L1 != Y1.length || L2 != Y2.length) {
			System.out.println("Input vectors must be column vectors.");
		}
		Matrix m_X1 = new Matrix(X1, X1.length);
		Matrix m_Y1 = new Matrix(X1, Y1.length);
		Matrix m_X2 = new Matrix(X1, X2.length);
		Matrix m_Y2 = new Matrix(X1, Y2.length);

		// create maxtrix forms
		Matrix m_X1_mat = ones(L2, 1).times(m_X1);
		Matrix m_Y1_mat = ones(L2, 1).times(m_Y1);
		Matrix m_X2_mat = m_X2.times(ones(1, L1));
		Matrix m_Y2_mat = m_Y2.times(ones(1, L1));

		// calculate frechet distance matrix
		Matrix frechet1 = sqrt_matrix(m_X1_mat.minus(m_X2_mat).arrayTimes(m_X1_mat.minus(m_X2_mat))
				.plus(m_Y1_mat.minus(m_Y2_mat).arrayTimes(m_Y1_mat.minus(m_Y2_mat))));

		double fmin = min(frechet1); // 获取最小值 (替换函数)
		double fmax = max(frechet1); // 获取最大值(替换函数)

		double res = 0;
		if (varargin != null) {
			res = varargin[0];
			if (res <= 0)
				System.out.println("The resolution parameter must be greater than zero.");
			else if ((fmax - fmin) / res > 10000) {
				System.out.println("Given these two curves, and that resolution, this might take a while.");
			} else if (res >= (fmax - fmin)) {
				System.out.println("The resolution is too low given these curves to compute anything meaningful.");
				f = fmax;
				return f;
			}
		} else {
			res = (fmax - fmin) / 1000;
		}

		// compute frechet distance
		double q3 = fmin;
		while (q3 < fmax) {

//			Matrix im1 = bwlabel(frechet1 <= q3);
			Matrix im1 = null;
			int tempRows = im1.getRowDimension();
			int tempCols = im1.getColumnDimension();
			double[][] tempData = im1.getArray();
			// get region number of beginning and end points
			if (tempData[0][0] != 0 && tempData[0][0] == tempData[tempRows - 1][tempCols - 1]) {
				f = q3;
				break;
			}
			q3 += res;
		}

		return f;
	}

	public static Matrix ones(int rows, int cols) {
		double[][] m_res = new double[rows][cols];

		for (int i = 0; i < rows; i++) {
			for (int j = 0; j < cols; j++) {
				m_res[i][j] = 1;
			}
		}
		return new Matrix(m_res);
	}

	public static Matrix sqrt_matrix(Matrix m) {
		double[][] a = m.getArray();
		int rows = m.getRowDimension();
		int cols = m.getColumnDimension();
		for (int i = 0; i < rows; i++) {
			for (int j = 0; j < cols; j++) {
				a[i][j] = Math.sqrt(a[i][j]);
			}
		}

		return new Matrix(a);
	}

	public static double min(Matrix matrix) {
		double[][] temp = matrix.getArray();
		int rows = matrix.getRowDimension();
		int cols = matrix.getColumnDimension();
		double min = temp[0][0];
		for (int i = 0; i < rows; i++) {
			for (int j = 0; j < cols; j++) {
				if (temp[i][j] < min) {
					min = temp[i][j];
				}
			}
		}
		return min;
	}

	public static double max(Matrix matrix) {
		double[][] temp = matrix.getArray();
		int rows = matrix.getRowDimension();
		int cols = matrix.getColumnDimension();
		double max = temp[0][0];
		for (int i = 0; i < rows; i++) {
			for (int j = 0; j < cols; j++) {
				if (temp[i][j] > max) {
					max = temp[i][j];
				}
			}
		}
		return max;
	}
}
