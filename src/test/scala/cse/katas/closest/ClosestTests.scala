package cse.katas.closest

import org.scalatest.path

/**
  Test-drive a method or function to accept a list of integers and return the one that is closest to zero.

  It should be an error for the list to be empty.

  If two different numbers tie for distance from zero (for example, 2 and -2), always return the positive one.
  */
class ClosestTests extends path.FunSpec {

  describe ("A list containing just one value") {
    val input = List (-10)

    describe ("searched for the element closest to zero") {
      val result = Closest.closestToZero (input)

      it ("produces that one value") {
        assert (result === Some (-10))
      }
    }
  }

  describe ("A list containing several positive values") {
    val input = List (5, 2, 8, 4, 7, 1)

    describe ("searched for the element closest to zero") {
      val result = Closest.closestToZero (input)

      it ("produces the smallest positive value") {
        assert (result === Some (1))
      }
    }
  }

  describe ("An empty list") {
    val input: List[Int] = Nil

    describe ("searched for the element closest to zero") {
      val result = Closest.closestToZero (input)

      it ("produces no result") {
        assert (result === None)
      }
    }
  }
}
